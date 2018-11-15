# Branching strategy

## Naming conventions
The branch names have a clear naming convention, following the title and label of the story ticket in the [Trello Scrum Board](https://trello.com/b/AnUsfea0/cornelia-cantieni).

#### Story branches

| Branch type | Naming example |
|:---|:---|
| bugfix | `bugfix/CANWEB-003-Fix-Sticky-Header` |
| concept | `feature/CANWEB-002-Implement-Sticky-Header` |
| feature | `concept/CANWEB-001-Create-Readme` |



#### Noticket branches

Code changes, which don't have a story ticket, have a special naming convention:

| Branch type | Naming example |
|:---|:---|
| noticket | `noticket/NOTICKET-Deleted-Unused-Files` |

#### Commiting and commit messages

It is recommended to commit in blocks. This bundles changes and makes them more readable and easier to understand for the review.

The commit messages also have a clear convention:

| Branch type | Naming example for commit message |
|:---|:---|
| story branch | `CANWEB-002: Created new component sticky-header` |
| noticket | `NOTICKET: Deleted unused file example.scss` |

## Creating pull request

Checklist for `pushing`, `creating pull requests` and `merging` branches into master:

1. `Commit` all final changes into current branch and make sure, all work is in the branch
2. Change branche to `master` and pull the newest state
3. Change again to your branch
4. Merge the `master` into your branch
5. If there are `merge conflicts`, resolve them. If the `merge conflict` is of a large scale, sit with the team and dissolve together.
6. After auto merge or resolving conflict, push the branch to the repo
7. Go to the [project repository](https://github.com/MrBuggy/cornelia-cantieni.ch)
8. `Create pull request` (title same as branch name, add a reviewer, add description if needed)
9. **Copy** link of `pull-request` and go to the [project scrum board](https://trello.com/b/AnUsfea0/cornelia-cantieni)
10. Move the `ticket` to the `Review / Testing` column and assign the ticket to the reviewer. Write a comment, mention the reviewer and paste the link to the `pull request`.

## Review and merge into master

Checklist for `review` and `mergin into master`:

1. Go through all changes in the pull request and review the code (code quality, [code convention](./code-convention.md), general solution)
2. Test the feature on all needed [browser and devices](./browsers-devices.md)
3. If review or test failed, move ticket back to column `In Progress`, comment the issue and reassign it back to the `responsible engineer`
4. If review and test passed, **merge the pull request** and **after successfull merge, delete the feature branch**.
5. Move the ticket to column `Done` unassign it
