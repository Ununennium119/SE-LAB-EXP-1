# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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