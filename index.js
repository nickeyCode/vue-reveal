import reveal from './ex-reveal.js'
import Notes from './plugin/notes/notes'
import Markdown from './plugin/markdown/markdown'
import Highlight from './plugin/highlight/highlight'
import Zoom from './plugin/zoom-js/zoom'

const pluginList = {
    "Markdown":(Reveal) => {
        console.log("registerPlugin Markdown")
        Markdown.registerPlugin(Reveal);
    },
    "Notes":(Reveal) => {
        console.log("registerPlugin Notes")
        Notes.registerPlugin(Reveal);
    },
    "Highlight":(Reveal) => {
        console.log("registerPlugin Highlight")
        Highlight.registerPlugin(Reveal);
    },
    "Zoom":(Reveal) => {
        console.log("registerPlugin Zoom")
        Zoom.registerPlugin(Reveal);
    },
}

const registerPlugin = (list) => {
    list.forEach((item) => {
        pluginList[item](reveal);
    })

}

// const registerPlugin = (Reveal) => {
//         Notes.registerPlugin(Reveal);
//         Markdown.registerPlugin(Reveal);
//         Highlight.registerPlugin(Reveal);
//         Zoom.registerPlugin(Reveal);
//     }
export default {
    reveal,
    registerPlugin
}

