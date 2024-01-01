// React
import React from "react";
import { useState } from 'react';
// components
import Route from "../Generals/blocks/Route";
// BlockNote
import {
  defaultBlockSchema,
  defaultBlockSpecs,
  defaultProps,
} from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  createReactBlockSpec,
  ReactSlashMenuItem,
  getDefaultReactSlashMenuItems,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { RiText } from "react-icons/ri";

export default function CrearPrueba() {
  // Creates a paragraph block with custom font.
  const FontParagraphBlock = createReactBlockSpec(
    {
      type: "fontParagraph",
      propSchema: {
        ...defaultProps,
        font: {
          default: "Comic Sans MS",
        },
      },
      content: "inline",
    },
    {
      render: ({ block, contentRef }) => {
        const style = {
          fontFamily: block.props.font
        };

        return (
          <div className="route">
            <div>
              <input type="hidden" name="" ref={contentRef}/> 
            </div>
            <div>
              <p ref={contentRef}/> 
            </div>
          </div>

        );
      },
      toExternalHTML: ({ contentRef }) => <div className="route">
      <div>
        <input type="hidden" name="" ref={contentRef}/> 
      </div>
      <div>
        <p ref={contentRef}/> 
      </div>
    </div>,
      parse: (element) => {
        const font = element.style.fontFamily;

        if (font === "") {
          return;
        }

        return {
          font: font || undefined,
        };
      },
    }
  );

  // Our block schema, which contains the configs for blocks that we want our
  // editor to use.
  const blockSchema = {
    // Adds all default blocks.
    ...defaultBlockSchema,
    // Adds the font paragraph.
    fontParagraph: FontParagraphBlock.config,
  };
  // Our block specs, which contain the configs and implementations for blocks
  // that we want our editor to use.
  const blockSpecs = {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the font paragraph.
    fontParagraph: FontParagraphBlock,
  };

  // Creates a slash menu item for inserting a font paragraph block.
  const insertFontParagraph: ReactSlashMenuItem<typeof blockSchema> = {
    name: "Insert Rutes Paragraph",
    execute: (editor) => {

      editor.insertBlocks(
        [
          {
            type: "fontParagraph",
            props: {
              font: undefined,
            },
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    aliases: ["p", "paragraph", "font"],
    group: "Other",
    icon: <RiText />,
  };

  // Stores the editor's contents as an array of Block objects.
  const [blocks, setBlocks] = useState<Block[] | null>(null);

  // Creates a new editor instance.
  const editor = useBlockNote({
    // Tells BlockNote which blocks to use.
    blockSpecs: blockSpecs,
    slashMenuItems: [
      ...getDefaultReactSlashMenuItems(blockSchema),
      insertFontParagraph,
    ],

    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) => {
      // Converts the editor's contents to an array of Block objects.
      setBlocks(editor.topLevelBlocks)

      console.log(editor.topLevelBlocks)
  }
  });

  // Renders the editor instance using a React component.
  return <>
    <BlockNoteView editor={editor} theme={"dark"} />

    {/* <Route /> */}
  </>
}