# shio.dev

## Setup

1. リポジトリをクローンする。
   ```powershell
   git clone "https://github.com/dino3616/shio.dev"
   cd "shio.dev"
   ```
2. 責任者から環境変数を受け取り、それをもとに各環境における`.env`ファイルを作成する。
3. Composeを起動する。
   ```powershell
   docker compose -f "./docker/docker-compose.development.yml" -p shio up -d --build
   ```
4. 起動したMongoDBをレプリカセットとして登録する。
   ```powershell
   docker compose -f "./docker/docker-compose.development.yml" -p shio exec mongo mongosh --eval "rs.initiate({_id: 'rs-shio', members: [{_id: 0, host: 'mongo:27017'}]});"
   ```
5. `@prisma/client`を自動生成する。
   ```powershell
   yarn prisma:gen
   ```
6. サーバーを起動する。
   ```powershell
   yarn dev
   ```
