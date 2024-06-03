### Bring Access Micro-Frontend and Server
* clone this repo `git clone https://git.jfrog.info/scm/infs/access.git`

### Installation
```bash
    cd ./access/frontend
    npm ci --legacy-peer-deps
    npm run build:umd
```

### Run Artifactory

**1 option**

Configure the version of Artifactory if you need in file `docker-compose.yaml`

```bash
cd access/java/server
mvnw install -Pci -B -nsu -e -DskipTests -Dmaven.test.skip=true -Daccess.frontend.local=true -pl='!coverage'

cd ./access/frontend/e2e/tools
docker-compose up -d
```

### Running UI in Development Mode

**Concurrent mode**

```bash
npm run start
```

Wait for serving the files and open **localhost** on port **8080**

### Running UI in Production Mode

```bash
cd ./access/frontend/e2e && npm run jpd:start
```
Wait for the build and open **localhost** on port **8082**

### Run e2e test in dev/prod mode

**Do the previous steps (Launch RT, Launch UI)**
```bash
cd ./access/frontend/e2e && npm ci
npm run cypress:open-dev` or `npm run cypress:open
```
`cypress:open-dev` or `npm run cypress:open` depends on envirement that you have chosen, dev and prod accordingly.
