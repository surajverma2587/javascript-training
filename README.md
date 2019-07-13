# Javascript Training

### Getting Started

If you do not have node and npm installed follow these steps:

```sh
# Download the nvm install script via cURL
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

# Check nvm version installed
nvm --version

# Install the latest Node LTS version
nvm install --lts

# Use the latest LTS verison
nvm use --lts
```

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

To run the tests follow these steps:

```sh
npm run test:jest
```

To run the tests in watch mode follow these steps:

```sh
npm run test:watch
```

To check for linting errors follow these steps:

```sh
npm run lint
```

## Challenges

1.  Hello World [hello-world]
