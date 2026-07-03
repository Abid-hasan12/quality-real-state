import { cp, access, readdir, rm } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import { execFileSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const worktreeDir = path.join(os.tmpdir(), 'qrs-gh-pages');

function runGit(args, cwd = rootDir) {
  execFileSync('git', args, {
    cwd,
    stdio: 'inherit',
  });
}

function gitOutput(args, cwd = rootDir) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
  }).trim();
}

async function pathExists(target) {
  try {
    await access(target, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function cleanDirectory(target) {
  const entries = await readdir(target, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      if (entry.name === '.git') {
        return;
      }

      await rm(path.join(target, entry.name), { recursive: true, force: true });
    }),
  );
}

async function copyDistContents(destination) {
  const entries = await readdir(distDir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      await cp(path.join(distDir, entry.name), path.join(destination, entry.name), {
        recursive: true,
        force: true,
      });
    }),
  );
}

async function removeWorktree() {
  if (!(await pathExists(worktreeDir))) {
    return;
  }

  try {
    runGit(['worktree', 'remove', '--force', worktreeDir]);
  } catch {
    await rm(worktreeDir, { recursive: true, force: true });
  }
}

async function main() {
  if (!(await pathExists(distDir))) {
    throw new Error('dist/ not found. Run "npm run build" before deploying.');
  }

  await removeWorktree();

  const localBranchExists = (() => {
    try {
      gitOutput(['show-ref', '--verify', '--quiet', 'refs/heads/gh-pages']);
      return true;
    } catch {
      return false;
    }
  })();

  const remoteBranchExists = (() => {
    try {
      gitOutput(['ls-remote', '--exit-code', '--heads', 'origin', 'gh-pages']);
      return true;
    } catch {
      return false;
    }
  })();

  try {
    if (localBranchExists) {
      runGit(['worktree', 'add', '--force', worktreeDir, 'gh-pages']);
    } else if (remoteBranchExists) {
      runGit(['worktree', 'add', '--force', '-b', 'gh-pages', worktreeDir, 'origin/gh-pages']);
    } else {
      runGit(['worktree', 'add', '--force', '--detach', worktreeDir]);
      runGit(['switch', '--orphan', 'gh-pages'], worktreeDir);
    }

    await cleanDirectory(worktreeDir);
    await copyDistContents(worktreeDir);

    runGit(['add', '-A'], worktreeDir);

    const status = gitOutput(['status', '--porcelain'], worktreeDir);
    if (!status) {
      console.log('No deployment changes to publish.');
      return;
    }

    runGit(['commit', '-m', 'Deploy to GitHub Pages'], worktreeDir);
    runGit(['push', '-u', 'origin', 'gh-pages'], worktreeDir);

    console.log('Published dist/ to origin/gh-pages.');
  } finally {
    await removeWorktree();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});