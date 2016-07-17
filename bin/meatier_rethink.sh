docker run \
	-it \
	--name=meatier_rethinkdb_1 \
	--net=meatier_default \
	-v "$PWD":/data
	-p 8080:8080
	rethinkdb \
	bin/bash
