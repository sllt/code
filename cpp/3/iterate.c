
#include <stdio.h>

int iterate(int value)
{
    if(1==value)
        return 1;
    return iterate(value-1)+value;
}
int main(int argc, const char *argv[])
{
    printf("%d\n",iterate(10));
    return 0;
}
