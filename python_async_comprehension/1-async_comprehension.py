#!/usr/bin/env python3
"""Nameless module for Python Async Comp Task 0"""
from random import random
import asyncio
from typing import Generator

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """Calls async_generator to collect 10 numbers"""

    result = []
    async for i in async_generator():
        result.append(i)

    return result
