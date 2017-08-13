# vim-manual

> 📖 List of popular shortcuts in VIM

## Shortcuts

### Window management

* <kbd>Ctrl + w =</kbd> - reset windows into best width & height
* <kbd>Ctrl + w h</kbd> - move focus - to left window
* <kbd>Ctrl + w j</kbd> - move focus - to down window
* <kbd>Ctrl + w k</kbd> - move focus - to up window
* <kbd>Ctrl + w l</kbd> - move focus - to rigth window
* <kbd>Ctrl + w ></kbd> - resize window - descrese width size
* <kbd>Ctrl + w <</kbd> - resize window - increase width size

### Editor

#### Editor: Open files

* `:e FILENAME` - open file to edit, replaced current window with file
* `:tabe` (`:tabedit`) - open file in new tab
* `:tabc` (`:tabclose`) - close current tab

#### Editor: Searching, greping etc

* `:noh` (`:nohl`, `:nohlsearch`) - clear highlight after search
* `/foo` - searching text `foo` in whole document
* `:cw` - show result list after searching
* `:%s/foo/bar/g` - replace globally `foo` to `bar`

#### Editor: Misc

* `so ~/.vimrc` - reload configuration in opened editor
* `:retab` - replace current whitespaces with sets in `.vimrc` file
* `:! ls` - run command `ls` in shell
* <kbd>Ctrl + a</kbd> - increment number

### Cursor navigation

* <kbd>Ctrl + e</kbd> - scroll the window down
* <kbd>Ctrl + y</kbd> - scroll the window up
* <kbd>Ctrl + f</kbd> - scroll down one page
* <kbd>Ctrl + b</kbd> - scroll up one page
* `H` - move cursor to the top of the window
* `M` - move cursor to the middle of the window
* `L` - move cursor to the bottom of the window
* `gg` - move cursor to the top of file
* `G` - move cursror to the bottom of file

---

## Magic commands

```
{command}{text object or motion}
```

Example:

* `diw` - "delete in word" - remove single word when cursor is on it
* `caw` - "change all word" (grap the whitespace)
* `ciw` - remove word and enter in *insert* mode
* `ci}` - remove text in parentheses
* `yi)` - yank text inside parentheses
* `va"` - visually select all inside doublequotes (including doublequotes)
* `vi"` - like `va"` but without doublequote

### Commands

* `d` - delete (also cut)
* `c` - change (delete, then place in insert mode)
* `y` - yank (copy)
* `v` - visual select

### Text objects

* `w` - words
* `s` - sentences
* `p` - paragraphs
* `t` - tags (available in XML/HTML files)

### Motions

* `a` - all
* `i` - in
* `t` - 'til
* `f` - find forward
* `F` - find backward

---

## Macros

### Record

* `q{label}`
* `(do the things)`
* `q`

`{label}` - is a single char

### Play

* `@{label}`

---

## Configuration rules

The best way is put them to file (`~/.vimrc`). Default path for configuration.

* `syntax on` - enable syntax highlighting
* `colorscheme molokai` - set editor theme
* `set number` - enable line number
* `set noic` - don't ignore letter case, ex. in searching
* `set expandtab` - change tabulators to spaces
* `set tabstop=4` - number of characters as indent with TAB key
* `set shiftwidth=4` - number of characters as indent with insertions
* `set mouse=a` - enable mouse in editor
* `set background=dark` - little change for brighter colors
* `set autoindent` - enable automatic indention
* `set hlsearch` - enable highlighting after searching process
* `set incsearch` - run searching process after you press any char (after '/')
* `set nowrap` - don't wrap lines
* `set clipboard=unnamedplus` - VIM use the same buffer as OS
* `set guifont=Inconsolata\ 12` - change font in editor
* `au VimEnter * NERDTree` - auto open NERDTree plugin in each editor instance
* `map <F9> :NERDTreeToggle <CR>` - set shortcut, ex. this line add service for F9 button, what will show/hide NERDTree panel

---

## Plugins

### Plugins: Vimium

Google Chrome plugin which support Vim navigation into browser.

More description on my blog [PL]: http://piecioshka.pl/blog/2015/01/23/vimium-plugin-do-twojej-przegladarki.html

### Plugins: NERDTree

Aside panel with directory structure. Some useful shortcuts:

* 'q' - exit
* `A` - maximize window
* <kbd>Ctrl + c</kbd> change current highlighted directory as root
* <kbd>Ctrl + u</kbd> change current directory as parent
* <kbd>Ctrl + p</kbd> set focus on parent dir on NERDTree list
* <kbd>Ctrl + o</kbd> on dir: open list with files; on file: edit file

----

### Plugins: CtrlP

Search in: files, buffers. Some shortcuts:

* <kbd>Ctrl + f</kbd> - move base of searching into left side (switch between modes)
* <kbd>Ctrl + b</kbd> - like <kbd>Ctrl + f</kbd> but into right side
* <kbd>Ctrl + r</kbd> - search by regexp mode
* <kbd>Ctrl + j</kbd> - like `j` in file (move cursor in search list down)
* <kbd>Ctrl + k</kbd> - like `k`
* <kbd>Ctrl + t</kbd> - open selected file in new tab
* <kbd>Ctrl + x</kbd> - open selected file in half horizontal window
* <kbd>Ctrl + v</kbd> - like <kbd>Ctrl + x</kbd> but in vertical mode

---

## Links

### Learn more about VIM

* http://walking-without-crutches.heroku.com/ - textmate vs. vim - useful presentation
* http://walking-without-crutches.heroku.com/image/images/vi-vim-cheat-sheet.png - cool cheat sheet
* http://vimcasts.org/ - video cast about VIM
* http://www.vim.org/docs.php - full VIM documentation
* http://www.cs.swarthmore.edu/help/vim/ - tips and tricks with Vim

### Plugins for VIM

* https://github.com/gmarik/vundle - plugin manager for VIM
* https://github.com/ctrlpvim/ctrlp.vim - show window with last modified files
* https://github.com/scrooloose/nerdtree - NERDTree support editor for projects navigation
* https://github.com/ervandew/supertab - show suggest after <tab> press
* https://github.com/scrooloose/syntastic - check syntax after save file
* https://github.com/bling/vim-airline - show fancy chars in bottom bar, some arrows etc.
* https://github.com/majutsushi/tagbar - show outline of methods in file
* https://github.com/tpope/vim-surround - add possibility to wrap string with smth
* https://github.com/Townk/vim-autoclose - if you put '(' this plugin automatically puts ')'
* https://github.com/airblade/vim-gitgutter - show plus/minus when you make changes
* https://github.com/matze/vim-move - can move up/down current line
* https://github.com/mattn/emmet-vim - plugin for emmet - successor of zen-coding
* https://github.com/scrooloose/nerdcommenter - comments line
* https://github.com/tpope/vim-markdown - highlighter for \*.md files
* https://github.com/tpope/vim-fugitive - shortcuts for Git commands

---

## Help

You can always use this:

* `:h quickref`
* `:h SHORTCUT` (`:h dd`, `:h :s`)
* `:exusage` - open help window and scroll to `EX commands` (very useful when you try check meaning of all Vim commands)

---

## Legend

* <kbd>Ctrl + ^</kbd> - TODO(piecioshka): explain command

---

Happy coding! :heart:
