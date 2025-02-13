interface IStack {
    name: string;
    icon: string;
    background? : boolean;
    category: ETechnologies;
}

export enum ETechnologies {
  
    Tools  = "Tools for Development and Collaboration",
    Programming = "Programming Languages",
    Libery = "Frameworks and Libraries"
}

export const stacks: IStack[] = [
    {
        name: "HTML",
        icon: "StackIcon/programming/html-1.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "CSS",
        icon: "StackIcon/programming/CSS.logo.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "JS",
        icon: "StackIcon/programming/javascript-1.svg",
        category: ETechnologies.Programming,
    },{
        name: "python",
        icon: "StackIcon/programming/python-4.svg",
        category: ETechnologies.Programming,
    },{
        name: "C",
        icon: "StackIcon/programming/c-1.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "Java",
        icon: "StackIcon/programming/java-14.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "C#",
        icon: "StackIcon/programming/c--4.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "TS",
        icon: "StackIcon/programming/typescript.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "MySQL",
        icon: "StackIcon/programming/mysql-logo-pure.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "Lua",
        icon: "StackIcon/programming/lua-5.svg",
        category: ETechnologies.Programming,
    },
    {
        name: "Jquery",
        icon: "StackIcon/lib/jquery-4.svg",
        category: ETechnologies.Libery,
    },
    {
        name: "React",
        icon: "StackIcon/lib/react-2.svg",
        category: ETechnologies.Libery,
    },{
        name: "Next",
        background: true,
        icon: "StackIcon/lib/next-js.svg",
        category: ETechnologies.Libery,
    },{
        name: "Angular",
        // background: true,
        icon: "StackIcon/lib/angular-icon-1.svg",
        category: ETechnologies.Libery,
    },{
        name: "PrimeNg",
        // background: true,
        icon: "StackIcon/lib/primeng-logo.webp",
        category: ETechnologies.Libery,
    },{
        name: "PrimeNg",
        icon: "StackIcon/lib/primereact-1.svg",
        category: ETechnologies.Libery,
    },
    {
        name: "PrimeNg",
        icon: "StackIcon/lib/AngularUI_material.png",
        category: ETechnologies.Libery,
    },
    {
        name: "PrimeNg",
        icon: "StackIcon/lib/bootstrap-4.svg",
        category: ETechnologies.Libery,
    },
    {
        name: "WindiCSS",
        icon: "StackIcon/lib/windi.svg",
        category: ETechnologies.Libery,
    },
    {
        name: "NodeJS",
        icon: "StackIcon/lib/node-js.svg",
        category: ETechnologies.Libery,
    },
    {
        name: "Express",
        icon: "StackIcon/lib/express-js.png",
        background: true,
        category: ETechnologies.Libery,
    },
    {
        name: ".NET Core",
        icon: "StackIcon/lib/NET_Core_Logo.png",
        category: ETechnologies.Libery,
    },
    {
        name: "Fiber",
        icon: "StackIcon/lib/gofiber.svg",
        background: true,
        category: ETechnologies.Libery,
    },
    {
        name: "Docker",
        icon: "StackIcon/tools/docker.png",
        category: ETechnologies.Tools,
    },
    {
        name: "kubernetes",
        icon: "StackIcon/tools/kube.png",
        category: ETechnologies.Tools,
    },
    {
        name: "Postman",
        icon: "StackIcon/tools/postman.svg",
        category: ETechnologies.Tools,
    },
    {
        name: "Github",
        icon: "StackIcon/tools/github.png",
        background: true,
        category: ETechnologies.Tools,
    },
    {
        name: "Gitlab",
        icon: "StackIcon/tools/gitlab.png",
        category: ETechnologies.Tools,
    },
    {
        name: "DrawIO",
        icon: "StackIcon/tools/drawIO.png",
        category: ETechnologies.Tools,
    },
    {
        name: "Figma",
        icon: "StackIcon/tools/figma-icon.svg",
        category: ETechnologies.Tools,
    }
];
