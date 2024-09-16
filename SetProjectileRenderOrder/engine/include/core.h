#ifndef _CORE_H_INCLUDE
#define _CORE_H_INCLUDE

#include <gbdk/platform.h>

void core_reset(void) BANKED;
void core_run(void) BANKED;

extern UBYTE render_order;

#endif