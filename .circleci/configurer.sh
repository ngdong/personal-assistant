#!/bin/bash
# Associative array where key represents a search string,
# and the value itself represents the replace string.
declare -A confs
confs=(
    [FB_API_KEY]=$FB_API_KEY
    [FB_AUTH_DOMAIN]=$FB_AUTH_DOMAIN
    [FB_DATABASE_URL]=$FB_DATABASE_URL
    [FB_PROJECT_ID]=$FB_PROJECT_ID
    [FB_STORAGE_BUCKET]=$FB_STORAGE_BUCKET
    [FB_MESSAGING_SENDER_ID]=$FB_MESSAGING_SENDER_ID
    [FB_APP_ID]=$FB_APP_ID
    [FB_MEASUREMENT_ID]=$FB_MEASUREMENT_ID
)
cd ../frontend/src

configurer() {
    # Loop the config array
    for i in "${!confs[@]}"
    do
        search=$i
        replace=${confs[$i]}
        sed -i "s/${search}/${replace}/g" ./environments/* manifest.js firebase-messaging-sw.js
    done
}
configurer