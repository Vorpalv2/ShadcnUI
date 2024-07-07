import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type SmallBoxProp = {
  Title: string;
  Content: string;
  HrefLink: string;
};

export default function SmallBox({ Title, Content, HrefLink }: SmallBoxProp) {
  return (
    <div className="flex w-full">
      <div className="w-1/4 h-1/2"></div>
      <div className="w-3/4 p-8">
        <Card>
          <CardHeader>
            <CardTitle>{Title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{Content}</p>
          </CardContent>
          <CardFooter>
            <Link
              href={`/posts/post/${HrefLink}`}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Read More
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
