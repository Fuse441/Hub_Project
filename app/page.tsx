

import { projects } from "@/config/projects";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Divider} from "@heroui/divider"
import {Image} from "@heroui/image"
import { Link } from "@heroui/link";

export default function Home() {
  return ( <div className="flex justify-between">
    <section className="flex flex-col m-10">
      <h1 className="font-bold text-7xl">Hello I'm</h1>
      <br></br>
      <h2 className="text-3xl">Jiranon Khemklad</h2>
      <h2>software engineer</h2>
    </section>
    <section className="flex flex-col m-5">
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">HeroUI</p>
          <p className="text-small text-default-500">heroui.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
    </section>
    </div>
  );
}
