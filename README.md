# vim-manual

> 📖 List of shortcuts which I used working with Vim

## Shortcuts

### Window management

* <kbd>Ctrl + w =</kbd> - reset windows into best width & height
* <kbd>Ctrl + w h</kbd> - move focus - to left window
* <kbd>Ctrl + w j</kbd> - move focus - to down window
* <kbd>Ctrl + w k</kbd> - move focus - to up window
* <kbd>Ctrl + w l</kbd> - move focus - to rigth window
* <kbd>Ctrl + w ></kbd> - resize window - descrese width size
* <kbd>Ctrl + w <</kbd> - resize window - increase width size
* <kbd>Ctrl + w -</kbd> - resize window - increase size
* <kbd>Ctrl + w +</kbd> - resize window - decrease size
* <kbd>{number}Ctrl + w _ </kbd> - set window height which is set to {number} lines
* <kbd>Ctrl + w _ </kbd> - maximize in height
* <kbd>Ctrl + w | </kbd> - maximize in width
* <kbd>Ctrl + w H</kbd> - move focused window to the far left
* <kbd>Ctrl + w J</kbd> - move focused window to the bottom
* <kbd>Ctrl + w K</kbd> - move focused window to the top
* <kbd>Ctrl + w L</kbd> - move focused window to the far right

### Editor

#### Editor: Open files

* `:e FILENAME` - open file to edit, replaced current window with file
* `:tabe` (`:tabedit`) - open file in new tab
* `:tabc` (`:tabclose`) - close current tab

#### Editor: Searching, greping etc

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

#### Editor: Misc

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

#### Editor: Markers

* `m{char}` - save current position into `{char}`
* \`{char} - go to saved mark
* `:marks` - display list of current saved markers

### Cursor navigation

* scroll whole window:
    - <kbd>Ctrl + e</kbd> - down
    - <kbd>Ctrl + y</kbd> - up
* scroll half of window:
    - <kbd>Ctrl + d</kbd> - down
    - <kbd>Ctrl + u</kbd> - up
* scroll one page:
    - <kbd>Ctrl + f</kbd> - down
    - <kbd>Ctrl + b</kbd> - up
* `H` - move cursor to the top of the viewport
* `M` - move cursor to the middle of the viewport
* `L` - move cursor to the bottom of the viewport
* `gg` - move cursor to the top of file
* `G` - move cursror to the bottom of file
* `{` - move cursor to previous empty line
* `}` - move cursor to next empty line
* `%` - jump between bracket in line
* `30%` - move cursor to line which is 30% of the top of file
* `zz` - center verticaly line with cursor
* ` `` ` - back cursors to previous place
* <kbd>Ctrl + ^</kbd> - return to previous file

---

## Magic commands

```
{command}{text object or motion}
```

Example:

* `diw` - "delete in word" - remove single word when cursor is on it
* `caw` - "change all word" (grap the whitespace)
* `ciw` - remove word and enter to *insert* mode
* `ci}` - remove text in parentheses and enter to *insert* mode
* `cit` - remove text in HTML tags
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

* `q{char}` - start recording
* `(do the things)`
* `q` - exit from recording

### Play

* `@{char}`

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
* `set nowrapscan` - stop navigate throught search result when file is ends
* `set nowrap` - don't wrap lines
* `set clipboard=unnamedplus` - Vim use the same buffer as OS
* `set guifont=Inconsolata\ 12` - change font in editor

---

## Plugins

### Plugins: Vimium

`Google Chrome` plugin which support Vim navigation in browser.

More description in article [PL]: http://piecioshka.pl/blog/2015/01/23/vimium-plugin-do-twojej-przegladarki.html

### Plugins: NERDTree

Aside panel with directory structure. Some useful shortcuts:

* `q` - exit
* `A` - maximize window
* <kbd>Ctrl + c</kbd> - change current highlighted directory as root
* <kbd>Ctrl + u</kbd> - change current directory as parent
* <kbd>Ctrl + p</kbd> - set focus on parent dir on NERDTree list
* <kbd>Ctrl + o</kbd> - on dir: open list with files; on file: edit file
* <kbd>s</kbd> - open file in vertical split mode
* <kbd>i</kbd> - open file in horizontal split mode

### Plugins: NERDCommenter

Comment line with simple 

* <kbd>\cc</kbd> - comment line (recognized filetype and comment in current lang)
* <kbd>\c[SPACE]</kbd> - toggle comment
* <kbd>\cu</kbd> - remove comment
* <kbd>\cs</kbd> - comment line in multiline mode
* <kbd>\cy</kbd> - yank line and comment it
* <kbd>\c$</kbd> - comment from cursor to end of line
* <kbd>\cA</kbd> - put comment delimiters and set cursor between them

### Plugins: CtrlP

Search in: files, buffers. Some shortcuts:

* <kbd>Ctrl + f</kbd> - move base of searching into left side (switch between modes)
* <kbd>Ctrl + b</kbd> - move base of searching into right side
* <kbd>Ctrl + r</kbd> - search by regexp mode
* <kbd>Ctrl + j</kbd> - like `j` in file (move cursor in search list down)
* <kbd>Ctrl + k</kbd> - like `k`
* <kbd>Ctrl + t</kbd> - open selected file in new tab
* <kbd>Ctrl + x</kbd> - open selected file in half horizontal window
* <kbd>Ctrl + v</kbd> - open selected file in half vertical mode

---

## Links

### Learn more about Vim

* http://walking-without-crutches.heroku.com/ - textmate vs. vim - useful presentation
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

Happy coding! :heart:
