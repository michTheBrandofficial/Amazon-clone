// vite.config.js

export default {
  configureServer({ server }) {
    server.watcher.add("**/*.tsx"); // You can replace it with the path of your choice
    server.watcher.on("change", (file) => {
      if (file.endsWith(".tsx")) {
        server.ws.send({
          type: "full-reload",
        });
      } else {
        server.ws.send({
          type: "import",
          path: file,
          payload: {
            type: "style-update",
          },
        });
      }
    });
  },
};
