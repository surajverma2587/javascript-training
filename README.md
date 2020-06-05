# Javascript Training

### Getting Started

If you do not have node and npm installed follow these steps:

```sh
# Download the nvm install script via cURL
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# Check nvm version installed
nvm --version

# Install and use the required Node version in .nvmrc file
nvm use
```

If you do not have Git installed follow these steps on [Git Setup](https://www.atlassian.com/git/tutorials/install-git#mac-os-x)

If you haven't cloned the repository follow these steps:

```sh
cd ~/Desktop
git clone https://github.com/surajverma2587/javascript-training.git
cd javascript-training
npm install
npm run test
```

If you have already cloned the repository follow these steps:

```sh
cd ~/Desktop/javascript-training
npm install
npm run test
```

You should see a bunch of failing tests except for the last one which should read:

```sh
PASS src/__tests__/index.spec.js
Setup
  ✓ should say 'All Good!!'
```

To run the tests follow these steps:

```sh
npm run test:jest
```

To run the tests in watch mode follow these steps:

```sh
npm run test:watch
```

To run the solution tests in watch mode follow these steps:

```sh
npm run test:solution
```

To check for linting errors follow these steps:

```sh
npm run lint
```
