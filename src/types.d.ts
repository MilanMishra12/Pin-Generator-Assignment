interface Pin {
    pinGenerated: string;
    del: boolean;
  }

  type TogglePin = (selectedPin: Pin) => void;
  type AddPin = (pinGenerated: string) => void;