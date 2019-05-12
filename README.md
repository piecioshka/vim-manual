# vim-manual

📖 List of shortcuts which I used working with Vim

## Table of Contents

* [<g-emoji class="g-emoji" alias="computer_mouse" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f5b1.png">🖱</g-emoji> Cursor navigation](#-cursor-navigation)
* [<g-emoji class="g-emoji" alias="framed_picture" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f5bc.png">🖼</g-emoji> Window management](#-window-management)
* [<g-emoji class="g-emoji" alias="memo" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png">📝</g-emoji> Editor](#-editor)
    + [Editor: Open files](#editor-open-files)
    + [Editor: Searching, greping etc](#editor-searching-greping-etc)
    + [Editor: Misc](#editor-misc)
    + [Editor: Settings](#editor-settings)
    + [Editor: Custom shortcuts](#editor-custom-shortcuts)
    + [Editor: Markers](#editor-markers)
* [<g-emoji class="g-emoji" alias="crystal_ball" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png">🔮</g-emoji> Magic commands](#-magic-commands)
    + [Magic commands: Delete text](#magic-commands-delete-text)
    + [Magic commands: Change text](#magic-commands-change-text)
    + [Magic commands: Copy text](#magic-commands-copy-text)
    + [Magic commands: Visual select text](#magic-commands-visual-select-text)
* [<g-emoji class="g-emoji" alias="page_with_curl" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c3.png">📃</g-emoji> Macros](#-macros)
    + [Record](#record)
    + [Play](#play)
* [<g-emoji class="g-emoji" alias="gear" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2699.png">⚙️</g-emoji> Configuration rules](#️-configuration-rules)
* [<g-emoji class="g-emoji" alias="electric_plug" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f50c.png">🔌</g-emoji> Plugins](#-plugins)
    + [Plugins: Vimium](#plugins-vimium)
    + [Plugins: NERDTree](#plugins-nerdtree)
    + [Plugins: NERDCommenter](#plugins-nerdcommenter)
    + [Plugins: CtrlP](#plugins-ctrlp)
* [<g-emoji class="g-emoji" alias="link" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f517.png">🔗</g-emoji> Links](#-links)
    + [Learn more about Vim](#learn-more-about-vim)
    + [Plugins for Vim](#plugins-for-vim)
* [<g-emoji class="g-emoji" alias="construction" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png">🚧</g-emoji> Help](#-help)

## 🖱 Cursor navigation

* scroll one page:
    + <kbd>Ctrl + f</kbd> - down
    + <kbd>Ctrl + b</kbd> - up
* scroll half of window:
    + <kbd>Ctrl + d</kbd> - down
    + <kbd>Ctrl + u</kbd> - up
* scroll one line (without moving cursor):
    + <kbd>Ctrl + e</kbd> - down
    + <kbd>Ctrl + y</kbd> - up
    + <kbd>zz</kbd> - center vertically line with cursor
* move cursor on the viewport
    + <kbd>H</kbd> - to the top
    + <kbd>M</kbd> - to the middle
    + <kbd>L</kbd> - to the bottom
* move cursor on the file
    + <kbd>gg</kbd> - to the top
    + <kbd>G</kbd> - to the bottom
    + <kbd>30%</kbd> - to line which is 30% of whole file
* <kbd>{</kbd> - move cursor to previous empty line
* <kbd>}</kbd> - move cursor to next empty line
* <kbd>%</kbd> - jump between bracket in line
* ` `` ` - back cursors to previous place
* <kbd>Ctrl + ^</kbd> - return to previous file

## 🖼 Window management

* <kbd>Ctrl + w =</kbd> - reset windows into best width & height
* move focus
    + <kbd>Ctrl + w h</kbd> - to left window
    + <kbd>Ctrl + w j</kbd> - to down window
    + <kbd>Ctrl + w k</kbd> - to up window
    + <kbd>Ctrl + w l</kbd> - to right window
* resize window
    + <kbd>Ctrl + w ></kbd> - decrease width size
    + <kbd>Ctrl + w <</kbd> - increase width size
    + <kbd>Ctrl + w -</kbd> - increase size
    + <kbd>Ctrl + w +</kbd> - decrease size
* <kbd>{number}Ctrl + w _ </kbd> - set window height which is set to {number} lines
* <kbd>Ctrl + w _ </kbd> - maximize in height
* <kbd>Ctrl + w | </kbd> - maximize in width
* <kbd>Ctrl + w H</kbd> - move focused window to the far left
* <kbd>Ctrl + w J</kbd> - move focused window to the bottom
* <kbd>Ctrl + w K</kbd> - move focused window to the top
* <kbd>Ctrl + w L</kbd> - move focused window to the far right

## 📝 Editor

### Editor: Open files

* `:e FILENAME` - open file to edit, replaced current window with file
* `:tabe` (`:tabedit`) - open file in new tab
* `:tabc` (`:tabclose`) - close current tab

### Editor: Searching, greping etc

* `:noh` (`:nohl`, `:nohlsearch`) - clear highlight after search
* `/foo` - searching text `foo` in whole document (forwards)
* `?foo` - searching text `foo` in whole document (backwards)
* `:cw` - show result list after searching
* `:%s/foo/bar/g` - replace globally `foo` to `bar`
* `*` - searching word where cursor is on it (forwards)
* `#` - searching word where cursor is on it (backwards)
* `g*` - searching partial words where cursor is on it (forwards)
* `g#` - searching partial words where cursor is on it (backwards)
* `/\<foo` - searching words starting with `foo`
* `/foo\>` - searching words ending with `foo`
* `/\<foo\>` - searching words `foo`

### Editor: Misc

* `so ~/.vimrc` - reload configuration in opened editor
* `:retab` - replace current whitespaces with sets in `.vimrc` file
* `:!ls` - run command `ls` in shell
* <kbd>Ctrl + a</kbd> - increment number
* <kbd>Ctrl + x</kbd> - decrement number
* <kbd>ZZ</kbd> - write files and quit
* <kbd>ZQ</kbd> - quit all instances of vim
* <kbd>Ctrl + z</kbd> - hide Vim to background - use `fg` in terminal to bring it to foreground
* <kbd>Ctrl + l</kbd> - redraw Vim windows

### Editor: Settings

* `au VimEnter * NERDTree` - auto open NERDTree plugin in each editor instance

### Editor: Custom shortcuts

* `map <F9> :NERDTreeToggle <CR>` - show/hide NERDTree panel on press `<F9>`

### Editor: Markers

* `m{char}` - save current position into `{char}`
* \`{char} - go to saved mark
* `:marks` - display list of current saved markers

---

## 🔮 Magic commands

```text
{command}{text object or motion}
```

* Commands
    + `d` - delete (also cut)
    + `c` - change (delete, then place in insert mode)
    + `y` - yank (copy)
    + `v` - visual select
* Text objects
    + `w` - words
    + `s` - sentences
    + `p` - paragraphs
    + `t` - tags (available in XML/HTML files)
* Motions
    + `a` - all
    + `i` - in
    + `t` - 'til
    + `f` - find forward
    + `F` - find backward

### Magic commands: Delete text

* `diw` - "delete in word" - remove single word when cursor is on it
* `ds{` - delete nearest braces `{}`
* `dt.` - delete text till `.`

### Magic commands: Change text

* `caw` - "change all word" (grab the whitespace)
* `ciw` - remove the word and enter to *insert* mode
* `ci}` - remove text in parentheses and enter to *insert* mode
* `cit` - remove text in HTML tags

### Magic commands: Copy text

* `yi)` - copy text inside parentheses

### Magic commands: Visual select text

* `va"` - visually select all inside double quotes (including double quotes)
* `vi"` - like `va"` but without double quotes
* `vtq` - visually select text till `q` letter (stop before letter)
* `vfq` - visually select text till `q` letter (stop after the letter)

---

## 📃 Macros

### Record

* `q{char}` - start recording
* `(do the things)`
* `q` - exit from recording

### Play

* `@{char}`

---

## ⚙️ Configuration rules

The best way is to put them to file (`~/.vimrc`). The default path for configuration.

* `syntax on` - enable syntax highlighting
* `colorscheme molokai` - set editor theme
* `set number` - enable line number
* `set noic` - don't ignore letter case, ex. in searching
* `set expandtab` - change tabulators to spaces
* `set tabstop=4` - number of characters as indent with the TAB key
* `set shiftwidth=4` - number of characters as indent with insertions
* `set mouse=a` - enable mouse in the editor
* `set background=dark` - little change for brighter colors
* `set autoindent` - enable automatic indention
* `set hlsearch` - enable highlighting after the searching process
* `set incsearch` - run searching process after you press any char (after '/')
* `set nowrapscan` - stop navigate through search result when a file is ends
* `set nowrap` - don't wrap lines
* `set clipboard=unnamedplus` - Vim use the same buffer as OS
* `set guifont=Inconsolata\ 12` - change font in editor

---

## 🔌 Plugins

### Plugins: Vimium

`Google Chrome` plugin which supports Vim navigation in the browser.

More description in the article [PL]:
<http://piecioshka.pl/blog/2015/01/23/vimium-plugin-do-twojej-przegladarki.html>

### Plugins: NERDTree

Aside from panel with the directory structure. Some useful shortcuts:

* `q` - exit
* `A` - maximize window
* <kbd>Ctrl + c</kbd> - change currently highlighted directory as root
* <kbd>Ctrl + u</kbd> - change current directory as parent
* <kbd>Ctrl + p</kbd> - set focus on parent dir on NERDTree list
* <kbd>Ctrl + o</kbd> - on dir: open list with files; on a file: edit file
* <kbd>s</kbd> - open file in vertical split mode
* <kbd>i</kbd> - open file in horizontal split mode

### Plugins: NERDCommenter

Comment line with simple

* <kbd>\cc</kbd> - comment line (recognized filetype and comment in current lang)
* <kbd>\c[SPACE]</kbd> - toggle comment
* <kbd>\cu</kbd> - remove the comment
* <kbd>\cs</kbd> - comment line in multiline mode
* <kbd>\cy</kbd> - yank line and comment it
* <kbd>\c$</kbd> - comment from the cursor to end of line
* <kbd>\cA</kbd> - put comment delimiters and set cursor between them

### Plugins: CtrlP

Search in: files, buffers. Some shortcuts:

* <kbd>Ctrl + f</kbd> - move the base of searching into the left side (switch between modes)
* <kbd>Ctrl + b</kbd> - move the base of searching into the right side
* <kbd>Ctrl + r</kbd> - search by regexp mode
* <kbd>Ctrl + j</kbd> - like `j` in a file (move cursor in search list down)
* <kbd>Ctrl + k</kbd> - like `k`
* <kbd>Ctrl + t</kbd> - open selected file in new tab
* <kbd>Ctrl + x</kbd> - open selected file in half horizontal window
* <kbd>Ctrl + v</kbd> - open selected file in half vertical mode

---

## 🔗 Links

### Learn more about Vim

* http://walking-without-crutches.heroku.com/ - TextMate vs. Vim - useful presentation
* http://walking-without-crutches.heroku.com/image/images/vi-vim-cheat-sheet.png - cool cheat sheet
* http://vimcasts.org/ - video cast about Vim
* http://www.vim.org/docs.php - full Vim documentation
* http://www.cs.swarthmore.edu/help/vim/ - tips and tricks with Vim
* https://www.maketecheasier.com/vim-keyboard-shortcuts-cheatsheet/
* https://gist.github.com/awidegreen/3854277
* https://www.computerhope.com/unix/vim.htm

### Plugins for Vim

* https://github.com/gmarik/vundle - plugin manager for Vim
* https://github.com/ctrlpvim/ctrlp.vim - show window with last modified files
* https://github.com/scrooloose/nerdtree - NERDTree support editor for projects navigation
* https://github.com/ervandew/supertab - show suggest after `<tab>` press
* https://github.com/scrooloose/syntastic - check syntax after saving file
* https://github.com/bling/vim-airline - show fancy chars in the bottom bar, some arrows, etc.
* https://github.com/majutsushi/tagbar - show outline of methods in a file
* https://github.com/tpope/vim-surround - add a possibility to wrap string with smth
* https://github.com/Townk/vim-autoclose - if you put '(' this plugin automatically puts ')'
* https://github.com/airblade/vim-gitgutter - show plus/minus when you make changes
* https://github.com/matze/vim-move - can move up/down the current line
* https://github.com/mattn/emmet-vim - plugin for emmet - successor of zen-coding
* https://github.com/scrooloose/nerdcommenter - comments line
* https://github.com/tpope/vim-markdown - highlighter for \*.md files
* https://github.com/tpope/vim-fugitive - shortcuts for Git commands

---

## 🚧 Help

You can always use this:

* `:h quickref`
* `:h SHORTCUT` (`:h dd`, `:h :s`)
* `:exusage` - open help window and scroll to `EX commands` (very useful when you try to check the meaning of all Vim commands)

---

Happy coding! :heart:
