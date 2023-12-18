// // React
import React from 'react'
import { useId, useState } from 'react';
// BlockNote
import { BlockNoteEditor, Block } from "@blocknote/core";
import {
    BlockNoteView,
    darkDefaultTheme,
    lightDefaultTheme,
    Theme,
    useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
// CSS
import './Crear.css';
// Components
import BaseLayout from '../Generals/Layout/Layout';

const darkRedTheme = {
    ...darkDefaultTheme,
    colors: {
        ...darkDefaultTheme.colors,
        editor: {
            text: "#F1F0F1",
            background: "#1D1C23",
        },
        sideMenu: "#F1F0F1",
        // TODO: Update
        highlightColors: darkDefaultTheme.colors.highlightColors,
    },
} satisfies Theme;

export default function Crear() {
    // Stores the editor's contents as an array of Block objects.
    const [blocks, setBlocks] = useState<Block[] | null>(null);

    // Creates a new editor instance.
    const editor: BlockNoteEditor = useBlockNote({
        // Listens for when the editor's contents change.
        onEditorContentChange: (editor) => {
            // Converts the editor's contents to an array of Block objects.
            setBlocks(editor.topLevelBlocks)

            console.log(editor.topLevelBlocks)
        }
    })

    return (
        <BaseLayout>
            <div className="Crear">
                <BlockNoteView editor={editor} theme={darkRedTheme} />
            </div>
        </BaseLayout>

    );
}
