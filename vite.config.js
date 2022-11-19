import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cart.html"),
        admin: resolve(__dirname, "admin.html"),
        details: resolve(__dirname, "details.html"),
        editform: resolve(__dirname, "edit-form.html"),
        contact: resolve(__dirname, "contact.html"),
        category1: resolve(
          __dirname,
          "categories/body-jewellery-category.html"
        ),
        category2: resolve(__dirname, "categories/bracelets-category.html"),
        category3: resolve(__dirname, "categories/earrings-category.html"),
        category4: resolve(__dirname, "categories/necklaces-category.html"),
        category5: resolve(__dirname, "categories/rings-category.html"),
        category6: resolve(__dirname, "categories/watches-category.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});
