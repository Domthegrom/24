# 24

## Getting Started

If you haven't yet start by installing [yarn](https://yarnpkg.com/en/).

1. Clone this repo using `git clone https://github.com/Domthegrom/24.git`
2. Move to the appropriate directory: `cd 24`.
4. Run `yarn install` in order to install dependencies.
5. Run `react-native start` to start the react native packager.
6. Run `react-native run-ios` to start the ios emulator and launch th app.

## Deployment

1. to be confirmed.

## Git Branching Strategy

### Main Branches

- `master`
- `dev`

### Supporting Branches

- Feature branches
- Release branches

**Feature Branches:**

Feature branches are for well features, structured like so `feature/authentication`

- must branch of `dev`
- must merge back into `dev`

Creating a feature branch: `git checkout -b feature/YOUR_FEATURE dev`

Finished features may be merged into the `dev` branch to definitely add them to the upcoming release, basic flow:

```bash
$ git checkout dev
Switched to branch 'dev'
$ git merge --no-ff `feature/YOUR_FEATURE`
Updating ea1b82a..05e9557
(Summary of changes)
$ git branch -d `feature/YOUR_FEATURE`
Deleted branch `feature/YOUR_FEATURE` (was 05e9557).
$ git push origin `dev`
```

**Release Branches:**

Release branches support preparation of a new production release structured like so `release/1.2`

- must branch of `develop`
- must merge back into `develop` and `master`

basic flow:

```bash
$ git checkout `dev`
Switched to branch 'dev'
$ git checkout -b `release/1.2` `dev`
Switched to a new branch "release-1.2"
$ git push
```

This branch may exist for a while as bug fixes will be merged into this branch rather then on the `dev` branch but no new features may directly added to this branch.

After the release branch has been approved, it will become an actual release so then it is merged into both `dev` and `master`, after which `master` should be tagged as per the release version.

basic flow:

First Dev:

```bash
$ git checkout `dev`
Switched to branch 'release/1.2'
$ git merge --no-ff `release/1.2`
Updating ea1b82a..05e9557
(Summary of changes)
$ git push origin `dev`
```

Then Master

```bash
$ git checkout `master`
Switched to branch 'release/1.2'
$ git merge --no-ff `release/1.2`
Updating ea1b82a..05e9557
(Summary of changes)
$ git tag -a 1.2.1
$ git push origin `master` --tags
$ git branch -d `release/1.2`
```

### Code Reviews

Whenever a developer wants to merge into either `master` or `dev` a pull request needs to be opened and at least one other developer needs to approve the pull request before it is merged in.
