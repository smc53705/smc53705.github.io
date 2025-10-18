interface DVDProps {
  numberOfDiscs: number;
}

export function DVD(props: DVDProps) {
  return (
    <div>This is the DVD component. This has {props.numberOfDiscs} discs</div>
  );
}
