import { Layout } from "../components";
import { Button } from "../components";

export default function HelpPage() {
    return (
        <Layout title="Help">
            <div className="flex gap-2 p-5">
                <Button>Test text</Button>
                <Button color="red">Test text</Button>
                <Button color="blue">Test text</Button>
                <Button color="green">Test text</Button>
                <Button color="grey">Test text</Button>
                
                <Button variant="light">Test text</Button>
                <Button variant="light" color="red">Test text</Button>
                <Button variant="light" color="blue">Test text</Button>
                <Button variant="light" color="green">Test text</Button>
                <Button variant="light" color="grey">Test text</Button>
            </div>
        </Layout>
    )
}