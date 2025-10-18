interface DigitalProps {
  locationSource: "Amazon" | "Vudu" | "Google Play";
}

export function Digital(props: DigitalProps) {
  return (
    <div>
      This is the DIGITAL component. This is owned on {props.locationSource}
    </div>
  );
}
