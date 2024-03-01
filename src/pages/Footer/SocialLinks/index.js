import { Stack, Link, useTheme } from "@mui/material";
import { cloneElement } from "react";
import { SOCIAL_LINKS } from "../constants";

export const SocialLinks = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={2} flex={1}>
      {SOCIAL_LINKS.map(({ icon, url }, idx) => {
        icon = cloneElement(icon, { color: "black", size: "28px" });
        return (
          <Link
            color="grey.700"
            sx={{ ":hover": { color: theme.palette.mode === "dark" ? "white" : "black" } }}
            key={idx}
            href={url}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              height={48}
              width={48}
              bgcolor={theme.palette.mode === "dark" ? "grey.900" : "grey.200"}
              borderRadius={3}
            >
              {icon}
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
};
