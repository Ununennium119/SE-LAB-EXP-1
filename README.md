# Software Engineering Lab

## Experiment Report

### Setting Up Git repository

The initial setup involved creating a Git repository and establishing the main branch on GitHub. This was achieved by executing the git init command followed by commands to add the remote origin and push the main branch to GitHub.

```bash
git remote add origin git@github.com:Ununennium119/SE-LAB-EXP-1.git
git branch -M main
git push -u origin main
```

### Creating a Base React Application

Following the installation of node.js, the the following command.

```bash
npx create-react-app se-lab-exp-1
```

Changes were then committed and pushed to the remote repository.

```bash
git add .
git commit -m "Initialize project using Create React App"
git push
```

### Deploying The Application To Github Pages

The deployment process began with the creation of a branch with name `gh-pages`.

```bash
git checkout -b gh-pages
git push --set-upstream origin gh-pages
```

This branch was configured in the GitHub repository settings (`Settings/Pages`) to serve the site.

![Github Pages](./images/github-pages.png)

Then a new branch `ci/deploy-on-github-pages` was created and the `gh-pages` dependency was added to the project for deployment purposes. This dependency is used for deploying React applications to Github Pages.

```bash
npm install gh-pages --save-dev
```

After that, the [`main.yml`](./.github/workflows/main.yml) workflow was added which builds the application on the branch `gh-pages`. After the application is built, Github will deploy the application from `gh-pages` branch.

At last the branch was pushed to the remote repository, a pull request was created and the branch was merged into the `main` branch.

![CI Pull request](./images/ci-pull-request.png)

### Protecting The Main Branch

In `Settings/Rules/Rulesets` a rule was created for the `main` branch to only allow changes using pull requests.

![Main Branch Rules](./images/main-branch-rules.png)

Also the `dev` branch was created and the [`enforcer.yml`](./.github/workflows/enforcer.yml) workflow was added to allow only merge requests from the `dev` branch to the `main` branch.

### Our Workflow

Initialy, serveral tasks were defined by the product manager.

![Tasks List](./images/tasks-list.png)

For each task a new branch was created and the required functionalities was implemented in the created branch. Then a pull request was created from the created branch to the `dev` branch. After reviewing the code and resolving conflicts if any, the created branch was merged into the `dev` branch.

Here is a list of some of the pull requests:

![Pull Requests List](./images/pull-requests-list.png)

Also here is some of conflict which were resolved:

![Conflict 1-1](./images/conflict-1-1.png)
![Conflict 1-2](./images/conflict-1-2.png)

If we needed to deploy the application to Github Pages, we only needed to merge the `dev` branch into the `main` branch by creating a pull request.

![Deploy Workflow 1](./images/deploy-workflow-1.png)
![Deploy Workflow 2](./images/deploy-workflow-2.png)

### Naming Conventions

#### Branch Names

`<type>/<short-description>`
- example: `feature/implement-task-template`

Here is a list of some of the branches:

![Branches List](./images/branches-list.png)

#### Commit Messages

`<type>: <description>`
- example: `feat: Add button component`

Here is a list of some of the commits:

![Commits List](./images/commits-list.png)

## Questions

### 1
The `.git` directory is a hidden directory that Git uses to store the metadata and object database for a repository. It contains all the information necessary for Git to manage the repository, including the commit history, branches, tags, configuration settings, and more.
Object Database, Branches and Tags, Commit History, Configuration Settings, Index and Hooks are some informations that are stored in `.git` directory.
This directory is created when you initialize a new Git repository using the `git init` command. This command creates an empty Git repository in the current directory, including the `.git` directory and its contents.


### 2
In the context of version control systems like Git, "atomic" refers to the idea that an operation or change is indivisible or all-or-nothing. Being atomic in both commits and pull requests emphasizes the importance of making changes in a way that is self-contained, coherent, and independent of other changes. This practice helps ensure a clean and manageable history, facilitates collaboration, and reduces the risk of conflicts or unintended consequences when integrating changes into the codebase.


### 3
#### 1) Fetch
`git fetch` retrieves the latest changes from a remote repository without merging them into your local branch. It updates your local copy of remote branches but does not modify your working directory or current branch.
#### 2) Merge
`git merge` integrates changes from one branch into another branch. It creates a new merge commit that combines the changes from the specified branch with the current branch.
#### 3) Pull
`git pull` combines `git fetch` and `git merge` in one command. It fetches the latest changes from the remote repository and then automatically merges them into your current branch.
#### 4) Rebase
`git rebase` moves or "replays" the commits from one branch onto another branch. It effectively rewrites the commit history by transplanting the commits onto the tip of the specified branch.
#### 5) Cherry-pick
`git cherry-pick` applies a specific commit from one branch onto another branch. It allows you to pick and choose individual commits from different branches and apply them to your current branch.


### 4
#### 1) Reset
`git reset` moves the HEAD and current branch pointer to a specified commit, effectively resetting the state of the repository to that commit. It can be used to undo changes, unstage files, or move the HEAD to a different point in history.
#### 2) Revert
`git revert` creates a new commit that undoes the changes introduced by a specified commit. It effectively adds an "inverse" commit to the history, preserving the original commit while reverting its changes.
#### 3) Restore
`git restore` (introduced in Git 2.23) reverts changes in the working directory and/or staging area to match the state of a specified commit, branch, or file. It can be used to discard changes, reset files to a specific state, or undo modifications.
#### 4) Checkout
`git checkout` can be used to switch between branches, create a new branch, or restore files in the working directory to match the state of a specified commit or branch. It's a versatile command that has multiple uses depending on the arguments provided.
#### 5) Switch
`git switch` (introduced in Git 2.23) switches between branches or restores the working directory to match the state of a specified branch or commit. It combines the functionality of `git checkout` and `git restore`.


### 5
#### Stage/Index
In Git, the "stage" or "index" refers to the area where changes are prepared before they are committed to the repository. When you make changes to files in your working directory, Git allows you to selectively stage these changes before committing them. This staging area is also sometimes referred to as the "index". This situation happens when we use `git add`. In this intermediate area you can review and organize your changes before committing them, allowing for more granular control over what gets included in each commit.
#### Stash
The `git stash` command is used to temporarily store changes in a "stash" so that you can work on something else without committing incomplete changes to the repository. It's particularly useful when you're in the middle of working on a feature or fixing a bug, and you need to switch to another task or branch.
The `git stash` command is handy for temporarily shelving changes without committing them, especially when you're in the middle of a task and need to switch contexts temporarily. It's important to note that stashed changes are stored locally and are not shared with other collaborators like commits are.


### 6
In the context of version control systems like Git, the concept of a "snapshot" refers to a complete and self-contained view of the project's state at a particular point in time. Each commit in Git represents a snapshot of the entire project at the moment the commit was made. When you make a commit in Git, you're essentially capturing the current state of all files in the repository as they exist in your working directory and staging area. This includes all changes that have been staged using `git add`, as well as any modifications made to files in the working directory. Each commit records a snapshot of the entire project, including the contents of all files, their paths, permissions, and other metadata.


### 7
A local repository resides on your local machine. It's where you perform most of your work, such as creating, editing, and committing changes to your project. A remote repository is hosted on a server, typically on a platform like GitHub, GitLab, Bitbucket, or a private server. It serves as a central location where multiple developers can collaborate on the same project.
The primary purpose of a local repository is to provide a working environment for individual developers. It allows developers to make changes to the project, experiment with new features, and test changes before sharing them with others. The primary purpose of a remote repository is to facilitate collaboration and sharing among multiple developers. It serves as a centralized location where developers can push their changes, share code with others, and synchronize their work with team members.
A local repository exists only on your local machine, so it's susceptible to data loss if your machine experiences hardware failure or other issues. It's essential to back up your local repository regularly to prevent loss of work. A remote repository serves as a backup and redundancy for your project's code. By pushing your changes to a remote repository, you ensure that your work is safely stored off-site and can be retrieved if needed, even in the event of local data loss.
