# 📚 Commands Reference

This file contains a collection of useful commands categorized by tools and technologies for quick reference.

---

## 🛠️ **Git Commands**

### Basic Git Commands
```bash
git init                    # Initialize a new Git repository
git clone <repo_url>        # Clone a repository
git add <file>              # Stage a file for commit
git add .                   # Stage all files
git commit -m "message"     # Commit with a message
git status                  # Check repository status
git log                     # View commit history
```

### Branch Management
```bash
git branch                  # List all branches
git branch <branch_name>    # Create a new branch
git checkout <branch_name>  # Switch to a branch
git merge <branch_name>     # Merge a branch into the current branch
git branch -d <branch_name> # Delete a branch
```

### Remote Repositories
```bash
git remote add origin <url> # Link remote repository
git push -u origin <branch> # Push to a remote branch
git pull origin <branch>    # Pull updates from remote
```

### Undo Changes
```bash
git restore <file>          # Undo changes to a file
git reset HEAD <file>       # Unstage a file
git revert <commit_hash>    # Revert a specific commit
```

---

## 📦 **npm (Node Package Manager)**

### Package Management
```bash
npm init                    # Initialize a new Node.js project
npm install <package>       # Install a package
npm install -g <package>    # Install a package globally
npm uninstall <package>     # Remove a package
npm update <package>        # Update a package
```

### Scripts
```bash
npm start                   # Run the 'start' script
npm test                    # Run the 'test' script
npm run <script_name>       # Run a custom script
```

---

## ⚙️ **Node.js Commands**

### Run Node.js
```bash
node <file.js>              # Run a JavaScript file
node                        # Start a Node.js REPL (interactive shell)
```

### Debugging
```bash
node inspect <file.js>      # Debug a script
node --inspect              # Start with Chrome DevTools
```

---

## 🗃️ **MongoDB Commands**

### Basic MongoDB
```bash
mongod                      # Start MongoDB server
mongo                       # Connect to MongoDB shell
```

### Database Operations
```bash
show dbs                    # Show all databases
use <database>              # Switch to a database
db.createCollection("name") # Create a collection
show collections            # Show all collections in a DB
```

### CRUD Operations
```bash
db.collection.insert({})    # Insert a document
db.collection.find({})      # Find documents
db.collection.update({})    # Update a document
db.collection.deleteOne({}) # Delete a document
```

---

## 🐧 **Linux Commands**

### File and Directory
```bash
ls                          # List files
cd <dir>                    # Change directory
mkdir <dir>                 # Create a directory
touch <file>                # Create a file
rm <file>                   # Delete a file
rm -r <dir>                 # Delete a directory
```

### System
```bash
pwd                         # Print current directory
top                         # Show running processes
ps                          # List running processes
kill <pid>                  # Kill a process by PID
```

---

## 💻 **VS Code Commands**

### Keyboard Shortcuts
```bash
Ctrl+`                      # Open terminal
Ctrl+Shift+P                # Open command palette
Ctrl+K, Ctrl+S              # Open keyboard shortcuts
Ctrl+B                      # Toggle sidebar
Ctrl+/                      # Comment/uncomment lines
```

### Extensions
```bash
code --install-extension <ext>    # Install an extension
code --list-extensions            # List installed extensions
```

---

## 🌐 **Useful Networking Commands**

### Ping and Networking
```bash
ping <domain>               # Check network connection
curl <url>                  # Make HTTP requests
wget <url>                  # Download a file
```

### Check Ports
```bash
netstat -tuln               # Check listening ports
lsof -i:<port>              # Check a specific port
```

---

## 🛠️ **Docker Commands**

### Basic Commands
```bash
docker --version            # Check Docker version
docker ps                   # List running containers
docker images               # List available images
docker build -t <tag> .     # Build an image from Dockerfile
docker run <image>          # Run a container
docker stop <container_id>  # Stop a running container
docker rm <container_id>    # Remove a container
```

---

## 🔥 **Common Commands**

### Kill Process Running on Port
```bash
lsof -i:<port>              # Find the process using the port
kill -9 <pid>               # Kill the process by PID
```

### Run Project
```bash
npm start                   # Start the project
nodemon <file.js>           # Start with live reload
```

---

## 🛡️ **Security (JWT)**

### Generate JWT Token (Node.js Example)
```javascript
// Generate token
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });

// Verify token
const verified = jwt.verify(token, 'secret_key');
```

---
