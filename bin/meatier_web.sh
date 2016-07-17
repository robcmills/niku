docker run -it --name meatier_web_1 --net meatier_default -v "$PWD":/usr/src/app meatier_web /bin/bash

docker exec -it meatier_web_1 /bin/bash