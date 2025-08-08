import { Box, SxProps, ButtonBase, Dialog } from '@mui/material'
import { useRef, useState } from "react";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const dialogType = useRef<"truth" | "dare" | null>(null);

  const onTruthClick = () => {
    setIsDialogOpen(true);
    dialogType.current = "truth";
  }

  const onDareClick = () => {
    setIsDialogOpen(true);
    dialogType.current = "dare";
  }

  const onDialogClose = () => {
    setIsDialogOpen(false);
    dialogType.current = null;
  }

  return <>
    <Box sx={containerSxProps}>
      <ButtonBase sx={truthCardSxProps}
        onClick={onTruthClick}
      >
        Truth
      </ButtonBase>
      <ButtonBase sx={dareCardSxProps}
        onClick={onDareClick}
      >
        Dare
      </ButtonBase>
    </Box>
    <Dialog
        open={isDialogOpen}
        onClose={onDialogClose}
    >
        Dialog content
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