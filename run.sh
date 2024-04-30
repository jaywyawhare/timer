if [ ! -f package-lock.json ]; then
  echo "Installing dependencies"
  npm install
fi

electron .