import { theme } from "@themes";
import { Badge } from "@ui/components";

export default function Preview() {
  return (
    <section className={theme}>
      <div className="flex flex-col gap-3 @sm:flex-row">
        <Badge variant="base" rounded="full">
          Hello Base
        </Badge>
        <Badge variant="neutral" rounded="full">
          Hello Neutral
        </Badge>
        <Badge variant="primary" rounded="full">
          Hello Primary
        </Badge>
        <Badge variant="secondary" rounded="full">
          Hello Secondary
        </Badge>
        <Badge variant="accent" rounded="full">
          Hello Accent
        </Badge>
      </div>
    </section>
  );
}
