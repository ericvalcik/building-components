import { Badge } from "./Badge";

export default function Preview() {
  return (
    <div className="flex gap-3">
      <Badge>Hello Badge</Badge>
      <Badge variant="warning">Hello Warning</Badge>
      <Badge variant="danger">Hello Danger</Badge>
    </div>
  );
}
