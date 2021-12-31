import { GetServerSidePropsContext } from "next";
import Layout from "../../../../components/Layout";
import MarkdownDisplayer from "../../../../components/MarkdownDisplayer";
import { Note } from "../../../../types/Notebook";

interface NotePageProps {
    notebookId: string,
    noteId: string,
    note: Note
}

export default function note({ notebookId, noteId, note }: NotePageProps) {
    return (
        <Layout title={note.title}>
            <div className="p-4 flex flex-col justify-center items-start max-w-xl mx-auto prose">
                <div className="mb-8">
                    <h1 className="mb-1">{note.title}</h1>
                    <p className="m-0 text-sm">{note.publishedDate}</p>
                    <p className="text-lg font-medium opacity-70 my-2"><i>{note.description}</i></p>
                </div>
                <div className="flex justify-center">
                    <MarkdownDisplayer value={note.content} />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query: { note_id, notebook_id } } = context

    const noteContent: Note = {
        content: `
# Aut ipsa urbes dum ultra alios morte ${note_id}/${notebook_id}

## Quidem sensimus urbesque quam sexque et quam

Lorem markdownum curruque petuntur penates omni ad ambo, *nec* pro socer fallis.
Nulla excipit succurritis mater urbes, annis aquae: foret haec os vivo.

> Dulce coniectum iubet hunc ostendens lapsas. Quid dea? Cum Livor vero ista
> numine. *Tot* sic arduus casus, muta ubi visa iamque, prensamque habebas
> occulte.

## Reduxit posse visis

Tenera tellus; uti iacet aethere barbara evolvere vultus aurum ingenti patre,
supplicium? Petunt patuit, **nec ferenti** cruentum Nilum fruticumque restat
inobservatus erat Neptunia aequora illa spatium vates audire. Aras tenet ficti
nulli, nomenque sit [illi praestent illa](http://mea.com/lacrimansvelle), nam.
Gratia tardo! *Nunc* est luna iniustaque signum, ima est virosque, vestem
Phoebus cortex, **transmittere Caune**, fixa.

- Sunt late avidos multifidasque mutor
- Ait quos galeam recessit
- Intextum querenda
- Axem me docebat labore inter grata occubuit
- Minus pariter gratia raro

## Gerit abnuat incessere urguet socerumque similem medullis

Parsque iamdudum, leaena confundant avidas aetasque auras, ipse Panchaeaque
animo terga expellitur alii animus haec via habendum. Torvo curae fecit genus,
sed rebus Cyllenius: matrona miserrimus umerique: ignoscite. Concordia et exuit
aratri digna nec margine **habet**. Per atri sanctae tulit det: vulnere laudis
exarsit amantis, baculumque at loca relecto equique? Hunc laniarat est fugit
magni nisi *causa* loquentis das resupinus invenit inmaduit, tenderet.

> Pridem capi ubi marmoreis vultus, heu [dicentem
> fallaces](http://ante-materiam.org/anguem-viscera) undas, illum, herbas.
> Decepto inficere, tantos, meliora precantia Ceycis, [ostendere
> medios](http://www.et-ore.io/).

## Comes timorem viribus stipite pignore natas

Limosi oculos, facta alvum dum eque adsueta lacertos inritus vulnere: nec quare,
quarum. Aptarique imagine, segetes suspiratibus canis, deque est nudis quam
colla et **laboret mearumin** vellet. Nihil est tempus, vera tunc faces gerebam
virgo nomenque isdem curvamine Hypsipyles meta; neci vires indulgens fuerat.

\`\`\`c
    spiderE.drive = heapEncoding;
    cron_down += scraping.utilityWildcard(golden) + push_address_processor;
    if (-4 > snmp + peripheral_servlet) {
        server_icann_art *= exabyteVirtualizationLossless;
        push_drive_ivr(aix_hyperlink_standalone);
    }
    if (queue_mail(finderFriendlyCopy, dithering_heat) != spyware_nybble(
            target_sla_wavelength, -4, nullMidiSmart) + spreadsheet_duplex +
            gifRestoreArt) {
        webRasterDirectx = cadCard.powerCyberspaceDvd(3) + horizontalUltraOlap;
    }
\`\`\`

Disiectisque Victor humanum, Salmacis virginea **promissa**. Et mihi et facta
ponunt animosa premens Myrrha, fumantia conantur Dianae haberet culpa non!
        `,
        title: `Title of the Note ${note_id}`,
        description: 'Tiny description for a tiny note',
        id: note_id as string,
        image: '',
        notebookId: notebook_id as string,
        publishedDate: '21 Feb 2021'
    }

    return {
        props: {
            notebookId: notebook_id,
            noteId: note_id,
            note: noteContent
        }
    }
}