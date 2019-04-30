# test-CLI

test-CLI is a template Command Line Interface made with Node-js.
Check out the Node-js or Django App Generator at https://github.com/csivitu/CSI-WebApp-Template/.

# Requirements
    Node-js (and npm)
    MongoDB

# Installation

This works only for Unix based environments.
```bash
cd path/to/directory/test-CLI
npm install
sudo npm link
```
### OR
```bash
cd path/to/directory/test-CLI
npm run install-link
```
Now test-cli can be used globally.


# Usage

```
test-cli --version : Gives the version being used
test-cli --help : Shows all commands in a help page
test-cli add : Adds a User to the local MongoDB database.
```

# Uninstall

```bash
cd path/to/directory/test-CLI
sudo npm unlink
npm uninstall
```
### OR
```bash
cd path/to/directory/test-CLI
npm run uninstall-unlink

```
