// Components
import { Box, Chip, Paper, Typography } from "@material-ui/core";
// Hooks
import useStyles from "./styles";

const backendTools = [
  "Typescript",
  "Nodejs",
  "Express",
  "Passport",
  "Jsonwebtoken",
  "Mongodb",
];

const frontendTools = [
  "Typescript",
  "React",
  "Next.js",
  "Material-UI",
  "Redux",
  "Redux Thunk",
  "Nprogress",
];

interface ToolsChipsSchemaProps {
  title: string;
  tools: Array<string>;
}

function ToolsChipsSchema({ title, tools }: ToolsChipsSchemaProps) {
  const classes = useStyles();
  return (
    <>
      <Typography component={"h2"} variant={"h4"} align={"center"}>
        {title}
      </Typography>
      <Box className={classes.listContainer}>
        {tools.map((toolName, index) => {
          return (
            <li key={`tool-list-item-${index}`}>
              <Chip
                label={toolName}
                className={classes.chip}
                color={"primary"}
              />
            </li>
          );
        })}
      </Box>
    </>
  );
}

export default function ToolsChips() {
  const classes = useStyles();
  return (
    <Paper component="section" className={classes.root}>
      <ToolsChipsSchema title={"Backend tools used"} tools={backendTools} />
      <ToolsChipsSchema title={"Frontend tools used"} tools={frontendTools} />
    </Paper>
  );
}
