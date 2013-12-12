#include "test.h"

#include <stdio.h>
int add(int a,int b)
{
    return a+b ;
}

int main(int argc, const char *argv[])
{
    printf("2+3=%d\n",add(2,3));
    printf("2-3=%d\n",sub(2,3));
    return 0;
}
