import { type CollectibleProps } from "..";

interface DigitalProps {
  source: CollectibleProps['digital_source_location']
}

export function Digital({source}: DigitalProps) {
  return (
    <div>
      This is the DIGITAL component. This is owned on {source}
    </div>
  );
}
