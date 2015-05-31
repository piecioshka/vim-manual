# vim-manual

**Vim** education area.

![vim-logo](./images/vim-logo.png)

All `ex` commands available in file `ex.txt`.

### Editor

 - `so ~/.vimrc` - reload configuration in opened editor
 - `:retab` - replace current whitespaces with sets in `.vimrc` file
 - `:noh` (`:nohl`, `:nohlsearch`) - clear highlight after search
 - `:cw` - show result list after searching
 - `:e` - open file to edit, replaced current window with file
 - `:tabe` (`:tabedit`) - open file in new tab
 - `:tabc` (`:tabclose`) - close current tab
 - `:! ls` - run command `ls` in shell
 - `/foo` - searching text `foo` in whole document
 - `:%s/foo/bar/g` - replace globally `foo` to `bar`

### Configuration rules

The best way is put them to file (`~/.vimrc`). Default path for configuration.

 - `syntax on` - enable syntax highlighting
 - `colorscheme molokai` - set editor theme
 - `set number` - enable line number
 - `set noic` - don't ignore letter case, ex. in searching
 - `set expandtab` - change tabulators to spaces
 - `set tabstop=4` - number of characters as indent with TAB key
 - `set shiftwidth=4` - number of characters as indent with insertions
 - `set mouse=a` - enable mouse in editor
 - `set background=dark` - little change for brighter colors
 - `set autoindent` - enable automatic indention
 - `set hlsearch` - enable highlighting after searching process
 - `set incsearch` - run searching process after you press any char (after '/')
 - `set nowrap` - don't wrap lines
 - `set clipboard=unnamedplus` - VIM use the same buffer as OS
 - `set guifont=Inconsolata\ 12` - change font in editor
 - `au VimEnter * NERDTree` - auto open NERDTree plugin in each editor instance
 - `map <F9> :NERDTreeToggle <CR>` - set shortcut, ex. this line add service for F9 button, what will show/hide NERDTree panel

### Plugins

 - https://github.com/gmarik/vundle - plugin manager for VIM
 - https://github.com/kien/ctrlp.vim - show window with last modified files
 - https://github.com/scrooloose/nerdtree - NERDTree support editor for projects navigation
 - https://github.com/ervandew/supertab - show suggest after <tab> press
 - https://github.com/scrooloose/syntastic - check syntax after save file
 - https://github.com/bling/vim-airline - show fancy chars in bottom bar, some arrows etc.
 - https://github.com/majutsushi/tagbar - show outline of methods in file
 - https://github.com/tpope/vim-surround - add possibility to wrap string with smth
 - https://github.com/Townk/vim-autoclose - if you put '(' this plugin automatically puts ')'
 - https://github.com/airblade/vim-gitgutter - show plus/minus when you make changes
 - https://github.com/matze/vim-move - can move up/down current line
 - https://github.com/mattn/emmet-vim - plugin for emmet - successor of zen-coding
 - https://github.com/scrooloose/nerdcommenter - comments line
 - https://github.com/tpope/vim-markdown - add nice highlight for \*.md files
 - https://github.com/tpope/vim-fugitive - add shortcuts for Git commands

#### Plugin: NERDTree

Aside panel with directory structure. Some useful shortcuts:

 - `Ctrl+c` change current highlighted directory as root
 - `Ctrl+u` change current directory as parent
 - `Ctrl+p` set focus on parent dir on NERDTree list
 - `Ctrl+o` on dir: open list with files; on file: edit file

#### Plugin: Vimium

Google Chrome plugin which support Vim navigation into browser.

More description on my blog [PL]: http://piecioshka.pl/blog/2015/01/23/vimium-plugin-do-twojej-przegladarki.html

![vimium-logo](./images/vimium-logo.jpg)

### Links

 - http://walking-without-crutches.heroku.com/ - textmate vs. vim - useful presentation
 - http://walking-without-crutches.heroku.com/image/images/vi-vim-cheat-sheet.png - cool cheat sheet
 - http://vimcasts.org/ - video cast about VIM
 - http://www.vim.org/docs.php - full VIM documentation
 - http://www.cs.swarthmore.edu/help/vim/ - tips and tricks with Vim

### Help

You can always use this:

 - `:h quickref`
 - `:h SHORTCUT` (`:h dd`, `:h :s`)
 - `:exusage` - open help window and scroll to `EX commands` (very useful when you try check meaning of all Vim commands)

---

Fork me on GitHub
