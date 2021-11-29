# Forking and Compiling Reddit Volition as a private extension.



### Step 0. Install your dependencies.

- First ensure you have Git installed on your machine.
  
    To do so on linux run `sudo apt install git-all` from terminal

    On Windows, navigate to `https://git-scm.com/download/win` and install the package that downloads automatically

- Next install Node.js and npm

    To do so follow the instructions here: `https://docs.npmjs.com/downloading-and-installing-node-js-and-npm`

### Step 1. Forking this Repository.

- After installing Git you should be able to run git commands from the terminal.

    Launch your terminal of choice and run `git --version` to make sure git is set up properly on your machine by returning your git version and not an error.

- Now navigate to the directory you'd like to download the extension files to and run these commands: 

```bash
mkdir volitionProject && cd volitionProject
git init
remote add origin git@github.com:BeckTimothy/reddit-volition.git
git pull origin master
```

What this does is creates a directory called 'volitionProject' then navitages inside it and turns that directory into a local git repository. It then sets an upstream reference to this remote repository, and then pulls the files from it to your local repository.

### Step 2. Compiling the Extension

- Starting from the previous step, within the volitionProject directory. You'll want to navigate into 'volition' directory by typing `cd volition` in the command line

- From here you can run `npm run build`

    Doing so will compile a fresh extension to be imported into chrome.

### Step 3. Importing the extension into Chrome.

- Now we can launch chrome and navigate to `chrome://extensions/`

- From here you'll want to enable developer mode in the top right, doing so will show a set of 3 new buttons.
 
- Go ahead and click `Load unpacked`

- In the directory selection navigate to volitionProject/Volition and highlight the build directory by clicking on it a single time.

- Now click `Select Folder` in the bottom right.

- You should now see 'Reddit Volition' as one of your extensions and should be able to see it in the top right or under the puzzle piece icon.



- By clicking on the puzzle piece Icon you can pin the extension to your toolbar.

- By clicking on the extension icon, you can modify which reddit features you want blocked.

- You may need to do a hard refresh of any reddit tabs after installing this application for it to take effect. 











