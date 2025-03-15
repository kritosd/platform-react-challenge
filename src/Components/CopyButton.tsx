import React, { useState } from "react";
import Button, { ButtonProps } from "Components/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";

interface CopyButtonProps extends ButtonProps {
  url: string;
}

const CopyButton = (props: CopyButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => handleTooltipClose(), 2000);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      handleTooltipOpen();
      console.info("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleClick = () => {
    copyToClipboard(props.url);
  };

  return (
    <Button onClick={handleClick}>
      <Tooltip
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Copied"
        slotProps={{
          popper: {
            disablePortal: true,
          },
        }}
      >
        <ContentCopyIcon />
      </Tooltip>
    </Button>
  );
};

export default CopyButton;
