## Installations and Setup

### Prerequisites

- Node.js 12.16.1 or higher
- NPM 6.13.4 or higher

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:igun997/anime-list.git
    ```
2. Install NPM packages with yarn or npm
   ```sh
   yarn install
   ```
   or
    ```sh
    npm install
    ```
3. Create .env file in the root directory and add the following
   ```sh
   NEXT_PUBLIC_API_URL=https://api.jikan.moe/v4
   PORT=3000
   ```
4. Start the app
   ```sh
   yarn dev
   ```
   or
    ```sh
    npm dev
    ```

## Deployment with Docker

1. Clone the repo
   ```sh
    git clone git@github.com:igun997/anime-list.git
    ```
2. Build the image
    ```sh
    docker build -t anime-list .
    ```
3. Run the container
    ```sh
    docker run -p 3000:3000 anime-list
    ```
4. Open the app in your browser
    ```sh
    http://localhost:3000
    ```
   

   
