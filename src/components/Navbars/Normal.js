import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Navbar, createStyles } from "@mantine/core";
import {
  Logout,
  Id,
  UserCircle,
  Pencil,
  Link,
  Messages,
} from "tabler-icons-react";

import About from "../About/About";
import Resume from "../Resume/Resume";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import UserMessages from "../UserMessages/UserMessages.js";

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

const Normal = () => {
  const navigate = useNavigate();

  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [socialMediaLinks, setSocialMediaLinks] = useState(false);
  const [userMessages, setUserMessages] = useState(false);

  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const handleLogout = (event) => {
    event.preventDefault();

    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <Grid>
      <Grid.Col span={2}>
        <Navbar width={{ sm: 257.5 }} p="md" className={classes.navbar}>
          <Navbar.Section grow>
            <div
              className={cx(classes.link, {
                [classes.linkActive]: sections[0]["label"] === active,
              })}
              key={sections[0]["label"]}
              onClick={(event) => {
                event.preventDefault();
                setActive("About");
                setAbout(true);
                setResume(false);
                setPortfolio(false);
                setSocialMediaLinks(false);
                setUserMessages(false);
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
                setAbout(false);
                setResume(true);
                setPortfolio(false);
                setSocialMediaLinks(false);
                setUserMessages(false);
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
                setAbout(false);
                setResume(false);
                setPortfolio(true);
                setSocialMediaLinks(false);
                setUserMessages(false);
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
                setAbout(false);
                setResume(false);
                setPortfolio(false);
                setSocialMediaLinks(true);
                setUserMessages(false);
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
                setAbout(false);
                setResume(false);
                setPortfolio(false);
                setSocialMediaLinks(false);
                setUserMessages(true);
              }}
            >
              <Messages className={classes.linkIcon} />
              <span>Messages</span>
            </div>
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <a
              href="#"
              className={classes.link}
              onClick={(event) => handleLogout(event)}
            >
              <Logout className={classes.linkIcon} />
              <span>Logout</span>
            </a>
          </Navbar.Section>
        </Navbar>
      </Grid.Col>

      <Grid.Col span={10}>
        {about && <About />}

        {resume && <Resume />}

        {/* portfolio && <Portfolio /> */}

        {socialMediaLinks && <SocialMediaLinks />}

        {userMessages && <UserMessages />}
      </Grid.Col>
    </Grid>
  );
};

export default Normal;
