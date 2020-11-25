<template>
  <v-container>
    <a target="_block" href="https://v2.vuetifyjs.com/zh-Hans/components/lists/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">形狀列表在v-list-item的一側具有圓形邊界。</v-chip>
    <div class="d-flex">
      <v-card class="mx-auto" max-width="300" tile>
        <v-list shaped>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card class="mx-auto ml-5" max-width="300" tile>
        <v-list rounded>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">頭像和列表項標題操作的組合</v-chip>
    <v-card max-width="500" class="mx-auto">
      <v-toolbar color="indigo" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Inbox</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-list-item v-for="item in items1" :key="item.title">
          <v-list-item-icon>
            <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >列表組件可以包含列表組標題，分割線，以及1行或者更多行，如果副標題文本溢出則會以省略號的形式截斷文本</v-chip
    >
    <v-card max-width="600" class="mx-auto">
      <v-toolbar color="light-blue" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-view-module</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line subheader>
        <v-subheader inset>Folders</v-subheader>

        <v-list-item v-for="item in items2" :key="item.title">
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-subheader inset>Files</v-subheader>

        <v-list-item v-for="item in items3" :key="item.title">
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用v-list-group組件，您可以使用sub-group屬性創建多達2級的深度。</v-chip
    >
    <v-card class="mx-auto" width="300">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="mdi-creative-commons" value="true">
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(admin, i) in admins" :key="i" link>
              <v-list-item-title v-text="admin[0]"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(crud, i) in cruds" :key="i">
              <v-list-item-title v-text="crud[0]"></v-list-item-title>
              <v-list-item-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">
      列表可以包含一組項目，這些項目將在單擊時顯示。擴展列表也用於v-navigation-drawer
      組件中。</v-chip
    >
    <v-card max-width="500" class="mx-auto">
      <v-toolbar color="teal" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Topics</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="item in items4"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.items" :key="subItem.title">
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class ListsTemplate extends Vue {
  item = 1;
  items = [
    { text: "Real-Time", icon: "mdi-clock" },
    { text: "Audience", icon: "mdi-account" },
    { text: "Conversions", icon: "mdi-flag" }
  ];

  items1 = [
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Ali Connors",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
    },
    {
      title: "Cindy Baker",
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
    }
  ];

  items2 = [
    {
      icon: "folder",
      iconClass: "grey lighten-1 white--text",
      title: "Photos",
      subtitle: "Jan 9, 2014"
    },
    {
      icon: "folder",
      iconClass: "grey lighten-1 white--text",
      title: "Recipes",
      subtitle: "Jan 17, 2014"
    },
    {
      icon: "folder",
      iconClass: "grey lighten-1 white--text",
      title: "Work",
      subtitle: "Jan 28, 2014"
    }
  ];
  items3 = [
    {
      icon: "assignment",
      iconClass: "blue white--text",
      title: "Vacation itinerary",
      subtitle: "Jan 20, 2014"
    },
    {
      icon: "call_to_action",
      iconClass: "amber white--text",
      title: "Kitchen remodel",
      subtitle: "Jan 10, 2014"
    }
  ];

  admins = [
    ["Management", "mdi-pig"],
    ["Settings", "mdi-pig"]
  ];
  cruds = [
    ["Create", "add"],
    ["Read", "insert_drive_file"],
    ["Update", "update"],
    ["Delete", "delete"]
  ];

  items4 = [
    {
      action: "mdi-pig",
      title: "Attractions",
      items: [{ title: "List Item" }]
    },
    {
      action: "mdi-pig",
      title: "Dining",
      active: true,
      items: [
        { title: "Breakfast & brunch" },
        { title: "New American" },
        { title: "Sushi" }
      ]
    },
    {
      action: "mdi-pig",
      title: "Education",
      items: [{ title: "List Item" }]
    },
    {
      action: "mdi-pig",
      title: "Family",
      items: [{ title: "List Item" }]
    },
    {
      action: "mdi-pig",
      title: "Health",
      items: [{ title: "List Item" }]
    },
    {
      action: "mdi-pig",
      title: "Office",
      items: [{ title: "List Item" }]
    },
    {
      action: "mdi-pig",
      title: "Promotions",
      items: [{ title: "List Item" }]
    }
  ];
}
</script>
