interface PageProps {
  params: { 
    href: string;
  };
}

export default async function Product({params}: PageProps){
    const {href} = await params;
    return(
        <h1>{href}</h1>
    )
} 