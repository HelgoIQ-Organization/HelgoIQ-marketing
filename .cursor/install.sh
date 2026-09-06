#!/usr/bin/env bash
# Cloud Agent / environment-build bootstrap for helgoiq.com.
#
# Recurring builds for a multi-root Cloud Agent workspace run this from /agent
# (or /agent/repos). Those directories are owned by root, so `pnpm install`
# there fails while initializing state:
#   ERR_PNPM_PACKAGE_MANIFEST_IO_ERROR / Permission denied (os error 13)
#   EACCES: permission denied, open '/agent/_tmp_...'
# Always enter the marketing checkout before invoking pnpm.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

if [ ! -f "${REPO_ROOT}/package.json" ] || [ ! -f "${REPO_ROOT}/pnpm-lock.yaml" ]; then
  echo "helgoiq-marketing package.json/lockfile not found at ${REPO_ROOT}" >&2
  exit 1
fi

cd "${REPO_ROOT}"
CI=true pnpm install --frozen-lockfile
