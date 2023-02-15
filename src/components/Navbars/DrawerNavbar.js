import React, { useState } from "react";
import { Burger, Drawer, Stack } from "@mantine/core";
import { Grid, Navbar, createStyles } from "@mantine/core";
import {
  Logout,
  Id,
  UserCircle,
  Pencil,
  Link,
  Messages,
} from "tabler-icons-react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      backgroundColor: "#1d2b3c",
      borderRight: "1px solid #f4c427",
      rightMargin: 0,
    },
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid #f4c427`,
      backgroundColor: "#1d2b3c",
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid #f4c427`,
      backgroundColor: "#1d2b3c",
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: "#ffffff",
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#1d2b3c",
        color: "#f4c427",

        [`& .${icon}`]: {
          color: "#f4c427",
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: "#1d2b3c",
        color: "#f4c427",
        [`& .${icon}`]: {
          color: "#f4c427",
        },
      },
    },
  };
});

const sections = [
  { label: "About" },
  { label: "Resume" },
  { label: "Portfolio" },
  { label: "Social Media" },
  { label: "Messages" },
];

const DrawerNavbar = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const [opened, setOpened] = useState(false);
  const title = opened ? "Close" : "Open";

  return (
    <div style={{ padding: 10 }}>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="65%"
        styles={{
          closeButton: { color: "#f4c427" },
          drawer: { backgroundColor: "#1d2b3c" },
        }}
      >
        <Stack align="center" justify="space-around" spacing="sm">
          <div
            className={cx(classes.link, {
              [classes.linkActive]: sections[0]["label"] === active,
            })}
            key={sections[0]["label"]}
            onClick={(event) => {
              event.preventDefault();
              setActive("About");
            }}
          >
            <UserCircle className={classes.linkIcon} />
            <span>About</span>
          </div>
          <div
            className={cx(classes.link, {
              [classes.linkActive]: sections[1]["label"] === active,
            })}
            key={sections[1]["label"]}
            onClick={(event) => {
              event.preventDefault();
              setActive("Resume");
            }}
          >
            <Id className={classes.linkIcon} />
            <span>Resume</span>
          </div>
          <div
            className={cx(classes.link, {
              [classes.linkActive]: sections[2]["label"] === active,
            })}
            key={sections[2]["label"]}
            onClick={(event) => {
              event.preventDefault();
              setActive("Portfolio");
            }}
          >
            <Pencil className={classes.linkIcon} />
            <span>Portfolio</span>
          </div>
          <div
            className={cx(classes.link, {
              [classes.linkActive]: sections[3]["label"] === active,
            })}
            key={sections[3]["label"]}
            onClick={(event) => {
              event.preventDefault();
              setActive("Social Media");
            }}
          >
            <Link className={classes.linkIcon} />
            <span>Social Media</span>
          </div>
          <div
            className={cx(classes.link, {
              [classes.linkActive]: sections[4]["label"] === active,
            })}
            key={sections[4]["label"]}
            onClick={(event) => {
              event.preventDefault();
              setActive("Messages");
            }}
          >
            <Messages className={classes.linkIcon} />
            <span>Messages</span>
          </div>
        </Stack>
      </Drawer>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        color="#f4c427"
      />
    </div>
  );
};

export default DrawerNavbar;
