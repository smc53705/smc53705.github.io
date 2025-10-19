interface DVDProps {
  count: number;
}

export function DVD({count}: DVDProps) {
  return (
    <div>This is the DVD component. This has {count} discs</div>
  );
}
