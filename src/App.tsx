import { Box, SxProps, ButtonBase, Dialog, DialogContent } from '@mui/material'
import { useRef, useState } from "react";
import { truthTasksBank, dareTasksBank } from "./tasks.ts";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const dialogType = useRef<"truth" | "dare" | null>(null);
  const dialogContent = useRef<string>("");
  const truthTasks = useRef<string[]>(truthTasksBank);
  const dareTasks = useRef<string[]>(dareTasksBank);

  const onTruthClick = () => {
    setIsDialogOpen(true);
    dialogType.current = "truth";
    dialogContent.current = truthTasks.current.pop() || "";
  }

  const onDareClick = () => {
    setIsDialogOpen(true);
    dialogType.current = "dare";
    dialogContent.current = dareTasks.current.pop() || "";
  }

  const onDialogClose = () => {
    setIsDialogOpen(false);
    dialogType.current = null;

  }

  return <>
    <Box sx={containerSxProps}>
      <ButtonBase sx={truthCardSxProps}
        onClick={onTruthClick}
        disabled={truthTasks.current.length === 0}
      >
        {truthTasks.current.length ? "Truth" : "No more truth cards!"}
      </ButtonBase>
      <ButtonBase sx={dareCardSxProps}
        onClick={onDareClick}
      >
        {dareTasks.current.length ? "Dare" : "No more dare cards!"}
      </ButtonBase>
    </Box>
    <Dialog
        open={isDialogOpen}
        onClose={onDialogClose}
        slotProps={{
          paper: {
            sx: { backgroundColor: dialogType.current === "truth" ? "pink" : "cornflowerblue" }
          }
        }}
    >
      <DialogContent>
        {/*<IconButton sx={{ alignSelf: "end" }}*/}
        {/*  onClick={onDialogClose}*/}
        {/*>*/}
        {/*  <Close />*/}
        {/*</IconButton>*/}
        {dialogContent.current}
      </DialogContent>
    </Dialog>
  </>
}

const containerSxProps: SxProps ={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px"
}

const cardSxProps: SxProps = {
  width: "120px",
  height: "240px",
  borderRadius: "8px",
  borderWidth: "5px",
  borderStyle: "solid",

  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const truthCardSxProps: SxProps = {
  ...cardSxProps,
  backgroundColor: "pink",
  borderColor: "deeppink"
};

const dareCardSxProps: SxProps = {
  ...cardSxProps,
  backgroundColor: "cornflowerblue",
  borderColor: "blue"
}

export default App
