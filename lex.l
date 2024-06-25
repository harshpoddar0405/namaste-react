%{
#include <stdio.h>
#include <string.h>
FILE *yyin;
char *arr[] = {"auto", "break", "case", "char", "continue", "do", "default", "const", "double", "else", "enum", "extern", "for", "if", "goto", "float", "int", "long", "register", "return", "signed", "static", "sizeof", "short", "struct", "switch", "typedef", "union", "void", "while", "volatile", "unsigned"};
int n = 0;
%}

%% 
[a-zA-Z_][a-zA-Z0-9_]* {
    int i;
    for (i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {
        if (strcmp(yytext, arr[i]) == 0) {
            printf("\nKeyWord: %s", yytext);
            break;
        }
    }
    if (i == sizeof(arr) / sizeof(arr[0])) {
        printf("\nIDENTIFIER: %s", yytext);
    }
    n++;
}

[0-9]+ {n++;printf("\ninteger : %s", yytext);}             

"<="|"=="|"="|"++"|"-"|"*"|"+"    { n++; printf("\noperator: %s", yytext); } 

[(){},;:] {n++;printf("\nsymbol : %s", yytext);} 

\"[^\"\n]*\"   {n++; printf("\nstring: %s",yytext);}

.|\n    {   /* Ignore all other */ }


%% 


int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <input_file>\n", argv[0]);
        return 1;
    }
    yyin = fopen(argv[1], "r");
    if (!yyin) {
        printf("Error opening file %s\n", argv[1]);
        return 1;
    }
    yylex();
    printf("\n\n\ntotal no. of token = %d\n", n);
    fclose(yyin);
    return 0;
}
